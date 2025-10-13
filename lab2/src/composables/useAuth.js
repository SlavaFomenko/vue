import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const user = ref(null);

const storedUser = localStorage.getItem('user');
if (storedUser) {
  user.value = JSON.parse(storedUser);
}

export function useAuth() {
  const router = useRouter();

  const isAuthenticated = computed(() => !!user.value);

  const login = (userData) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
    router.push('/');
  };

  return {
    user,
    isAuthenticated,
    login,
    logout
  };
}
