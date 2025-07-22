import { Points } from "../interface/checkout";

export async function fetchPoints(): Promise<Points> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/points`);

  if (!res.ok) {
    throw new Error("포인트 정보를 불러오지 못했습니다.");
  }

  const data = await res.json();
  
  return data;
}
