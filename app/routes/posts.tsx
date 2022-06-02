import { Outlet } from "@remix-run/react";

export default function PostsRoute() {
  return (
    <Outlet />
  );
}

// NOTE: Cover all the errors that can occur in the parent and child routes
export function ErrorBoundary({ error }: { error: unknown; }) {
  if (error instanceof Error) {
    return <div className="text-red-500">Oh no! Something went wrong!
      <pre>{error.message}</pre>
    </div>;
  }
  return <div className="text-red-500">Oh no! Something went wrong!</div>;

}