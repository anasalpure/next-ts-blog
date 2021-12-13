import { GetStaticProps } from "next";
import { ErrorProps } from "next/error";
import React from "react";

function Error({ statusCode }: ErrorProps) {
  return (
    <p className="w-full text-3xl text-center text-gray-400 my-12">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

export const getStaticProps: GetStaticProps = async ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {
    props: {
      statusCode,
    },
  };
};

export default Error;
