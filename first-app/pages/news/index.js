import { Fragment } from "react";
import Link from "next/link";
const News = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/teste1">teste1</Link>
        </li>
        <li>
          <Link href="/news/teste2">teste2</Link>
        </li>
        <li>
          <Link href="/news/teste3">teste3</Link>
        </li>
        <li>
          <Link href="/news/teste4">teste5</Link>
        </li>
        <li>
          <Link href="/news/teste6">teste6</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default News;
