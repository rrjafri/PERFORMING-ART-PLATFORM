type User = {
    email: string;
    password: string;
    role: string;
  }
  
  export const auth = {
    signup: (email: string, password: string, role: string) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find((user: User) => user.email === email);
      
      if (existingUser) {
        throw new Error('User already exists');
      }
  
      users.push({ email, password, role });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify({ email, role }));
      return { email, role };
    },
  
    login: (email: string, password: string) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid credentials');
      }
  
      localStorage.setItem('currentUser', JSON.stringify({ email: user.email, role: user.role }));
      return { email: user.email, role: user.role };
    },
  
    logout: () => {
      localStorage.removeItem('currentUser');
    },
  
    getCurrentUser: () => {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
  };
  
  