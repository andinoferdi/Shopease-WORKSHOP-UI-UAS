import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  type Cart,
  addToCart,
  createCart,
  getCartWithProducts,
  removeFromCart,
  updateCartItemQuantity,
} from "@/lib/data/cart";

export async function GET() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");

  if (!cartCookie) {
    return NextResponse.json({ cart: createCart() });
  }

  try {
    const cart = JSON.parse(cartCookie.value) as Cart;
    const cartWithProducts = getCartWithProducts(cart);

    return NextResponse.json({ cart: cartWithProducts });
  } catch (error) {
    console.error("Error parsing cart cookie:", error);
    return NextResponse.json({ cart: createCart() });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity } = await request.json();

    if (!productId || typeof productId !== "number") {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    let cart: Cart;

    if (!cartCookie) {
      cart = createCart();
    } else {
      cart = JSON.parse(cartCookie.value) as Cart;
    }

    const updatedCart = addToCart(cart, productId, quantity || 1);

    // Save the cart to cookies
    cookieStore.set("cart", JSON.stringify(updatedCart), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    return NextResponse.json({ cart: getCartWithProducts(updatedCart) });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { error: "Failed to add to cart" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { productId, quantity } = await request.json();

    if (
      !productId ||
      typeof productId !== "number" ||
      typeof quantity !== "number"
    ) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    if (!cartCookie) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const cart = JSON.parse(cartCookie.value) as Cart;

    const updatedCart = updateCartItemQuantity(cart, productId, quantity);

    // Save the cart to cookies
    cookieStore.set("cart", JSON.stringify(updatedCart), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    return NextResponse.json({ cart: getCartWithProducts(updatedCart) });
  } catch (error) {
    console.error("Error updating cart:", error);
    return NextResponse.json(
      { error: "Failed to update cart" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    if (!cartCookie) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const cart = JSON.parse(cartCookie.value) as Cart;

    const updatedCart = removeFromCart(cart, Number.parseInt(productId));

    // Save the cart to cookies
    cookieStore.set("cart", JSON.stringify(updatedCart), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    return NextResponse.json({ cart: getCartWithProducts(updatedCart) });
  } catch (error) {
    console.error("Error removing from cart:", error);
    return NextResponse.json(
      { error: "Failed to remove from cart" },
      { status: 500 }
    );
  }
}
