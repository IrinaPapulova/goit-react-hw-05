import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.text}>Page not found! Sorry!</p>
      <p className={css.text}>
        Please go back to <Link to="/">home page</Link>
      </p>
    </div>
  );
}