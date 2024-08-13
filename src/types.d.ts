declare global {
  interface MovieBannerCardProps {
    title: string;
    imgpath: string;
    genre: string[];
    duration: string;
    rating: number;
    reviews: number;
    className?: string;
  }

  interface MovieCardProps {
    title: string;
    imgpath: string;
    genre: string[];
    releaseDate: string;
    className?: string;
  }

  interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image: string;
    order_id: string;
    handler: (response: any) => void;
    prefill?: {
      name?: string;
      email?: string;
      contact?: string;
    };
    notes?: {
      address?: string;
    };
    theme?: {
      color?: string;
    };
  }

  interface Razorpay {
    open(): void;
  }

  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): Razorpay;
    };
  }
}

export {};
