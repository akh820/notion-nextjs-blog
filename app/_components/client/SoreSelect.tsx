'use client'; // use client로 서버 컴포넌트와 클라이언트 컴포넌트가 나뉜것
// client 하위에서 사용한 컴포넌트는 모두 클라이언트 컴포넌트로 간주가됨

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelect() {
  //클라이언트 컴포넌트에서 사용하고싶다면 NEXT_PUBLIC_ 접두사 붙여야함, 보안에 중요한 인증과 같은값 사용하면 안됨
  console.log('NEXT_PUBLIC_CLIENT: ', process.env.NEXT_PUBLIC_CLIENT);
  console.log('CLIENT: ', process.env.CLIENT);

  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'latest';

  const handleSort = (value: string) => {
    console.log('SortSelect');

    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);

    router.push(`?${params.toString()}`);
  };

  return (
    <Select value={sort} onValueChange={handleSort}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 방식 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">최신순</SelectItem>
        <SelectItem value="oldest">오래된순</SelectItem>
      </SelectContent>
    </Select>
  );
}
