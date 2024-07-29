// lib/routerHelper.js
import { useRouter } from 'next/router';

export const useNavigate = () => {
  const router = useRouter();

  const navigate = (href) => {
    router.push(href);
  };

  return { navigate };
};
