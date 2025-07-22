export const metadata = {
  title: 'UglyUs',
  description: '친환경 못난이 채소를 합리적인 가격에 구매하세요',
  keywords: ['UglyUs', '야채', '채소', '친환경', '장바구니'],
};

export default function BasketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`p-0`}>
      <div>{children}</div>
    </div>
  );
}
