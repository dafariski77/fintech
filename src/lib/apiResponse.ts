import { NextResponse } from "next/server";

interface IResponse<T> {
  code?: ResponseInit["status"];
  message?: string;
  data?: T;
  error?: object | string;
}

const ApiResponse = <T>({
  data,
  code = 200,
  message = "Success",
  error,
}: IResponse<T>) => {
  return NextResponse.json(
    {
      meta: {
        code,
        message,
      },
      data,
      error,
    },
    {
      status: code,
    },
  );
};

export default ApiResponse;
