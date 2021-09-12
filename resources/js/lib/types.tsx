import { ErrorBag, Errors, Page, PageProps } from "@inertiajs/inertia";

export interface IUser {
  id: number;
  created_at: string;
  updated_at: string;
  email: string;
  name: string;
  email_verified_at?: string;
  admin: boolean;
  provider: string;
  social_id?: string;
  social_username?: string;
  social_avatar?: string;
}

export interface IPageProps extends Page<PageProps> {
  props: {
    errors: Errors & ErrorBag;
    authenticated: boolean;
    user: IUser;
  };
}
