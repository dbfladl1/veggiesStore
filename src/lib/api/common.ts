import { NextResponse } from "next/server";

type returnStateType = {
  data: object[] | null;
  error: Error | null;
};

const errorMap: { [key: string]: { status: number; message: string } } = {
  // 외래 키 오류
  "violates foreign key constraint": {
    status: 400,
    message: "존재하지 않는 관계입니다.",
  },

  // 중복 키 (PK나 unique 컬럼 중복)
  "duplicate key value": {
    status: 409,
    message: "이미 등록된 항목입니다.",
  },

  // RLS
  "violates row-level security": {
    status: 403,
    message: "접근 권한이 없습니다.",
  },

  // null value in column
  "null value in column": {
    status: 400,
    message: "필수 항목이 누락되었습니다.",
  },

  // value too long for type
  "value too long for type": {
    status: 400,
    message: "입력값이 너무 깁니다.",
  },

  // invalid input syntax (e.g. 잘못된 UUID 등)
  "invalid input syntax": {
    status: 400,
    message: "입력 형식이 잘못되었습니다.",
  },

  // check constraint 오류 (예: 정규식, 길이 제한 등)
  "violates check constraint": {
    status: 400,
    message: "유효하지 않은 값입니다.",
  },
};

export function returnState({ data, error }: returnStateType) {
  if (error) {
    for (const key in errorMap) {
      if (error.message.includes(key)) {
        const { status, message } = errorMap[key];
        return NextResponse.json({ error: message }, { status });
      }
    }

    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }

  return NextResponse.json({ message: "200", data });
}

export function catchState(error: unknown) {
  if (error instanceof SyntaxError) {
    return new Response(JSON.stringify({ error: "요청 형식이 잘못됨" }), {
      status: 400, // 잘못된 요청 → 클라이언트 책임
    });
  }

  return new Response(JSON.stringify({ error: "서버 오류 발생" }), {
    status: 500,
  });
}
