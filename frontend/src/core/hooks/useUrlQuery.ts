import { UrlObject } from "url";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

export type UpdateUrlQueryOptions = {
  method?: "push" | "replace";
};

export type UrlQueryType<UrlQuery> = {
  query: UrlQuery;
  update: (
    params: QueryParam<UrlQuery>[],
    options?: UpdateUrlQueryOptions,
    urlObject?: UrlObject
  ) => Promise<boolean>;
};

export type QueryParam<UrlQuery> = {
  param: keyof UrlQuery;
  value?: string;
};

export const useUrlQuery = <
  UrlQuery extends ParsedUrlQuery
>(): UrlQueryType<UrlQuery> => {
  const router = useRouter();
  const query = router.query as unknown as UrlQuery;

  const update = useCallback(
    async (
      params: QueryParam<UrlQuery>[],
      options?: UpdateUrlQueryOptions,
      urlObject?: UrlObject
    ) => {
      const query = Object.assign(
        { ...router.query },
        ...params.map((item) => ({ [item.param]: item.value }))
      );
      Object.keys(query).map((key) => {
        if (query[key] === undefined) {
          delete query[key];
        }
      });
      if (options?.method === "replace") {
        return router.replace(
          {
            pathname: router.pathname,
            query: query,
            ...(urlObject ?? {}),
          },
          undefined,
          { shallow: true, scroll: true }
        );
      } else {
        return router.push(
          {
            pathname: router.pathname,
            query: query,
            ...(urlObject ?? {}),
          },
          undefined,
          { shallow: true, scroll: true }
        );
      }
    },
    [router]
  );

  return {
    query,
    update,
  };
};
