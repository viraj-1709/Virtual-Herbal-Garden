import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEFAULT_USERS = [
  {
    id: 'usr_admin_01',
    name: 'AYUSH National Admin',
    email: 'admin@ayush.gov.in',
    password: 'admin123',
    role: 'admin',
    designation: 'AYUSH Botanical Directorate',
    institution: 'Ministry of AYUSH, Govt. of India',
    joinedDate: 'January 2026',
    avatarInitials: 'AD'
  },
  {
    id: 'usr_researcher_02',
    name: 'Dr. Viraj Sharma',
    email: 'researcher@ayush.gov.in',
    password: 'user123',
    role: 'user',
    designation: 'Ayurvedic Pharmacognosy Scholar',
    institution: 'National Institute of Ayurveda',
    joinedDate: 'February 2026',
    avatarInitials: 'VS'
  }
];

export function AuthProvider({ children }) {
  // Initialize registered users list in localStorage if not present
  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem('vhg_registered_users');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse stored users', e);
    }
    localStorage.setItem('vhg_registered_users', JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  });

  // Current logged-in user (null by default for new visitors, persisted in localStorage upon sign-in)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('vhg_current_user');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse current user', e);
    }
    return null;
  });

  // Modal display states
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('signin'); // 'signin' | 'signup'
  const [authRoleTab, setAuthRoleTab] = useState('user'); // 'user' | 'admin'

  // Persist current user changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('vhg_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('vhg_current_user');
    }
  }, [currentUser]);

  // Persist users DB changes
  useEffect(() => {
    localStorage.setItem('vhg_registered_users', JSON.stringify(users));
  }, [users]);

  // Helper to extract initials
  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Sign In function
  const login = ({ email, password, role }) => {
    const cleanEmail = email.trim().toLowerCase();
    const foundUser = users.find(
      u => u.email.toLowerCase() === cleanEmail && u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        error: 'Invalid email or password. Please verify your credentials.'
      };
    }

    if (role && foundUser.role !== role) {
      return {
        success: false,
        error: `This account is registered as ${foundUser.role === 'admin' ? 'an Admin' : 'a User'}. Please select the correct role above.`
      };
    }

    setCurrentUser(foundUser);
    setIsAuthModalOpen(false);
    return { success: true, user: foundUser };
  };

  // Sign Up function
  const signup = ({ name, email, password, role = 'user', designation = '', institution = '' }) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!cleanName || !cleanEmail || !password) {
      return { success: false, error: 'Please fill in all required fields.' };
    }

    if (password.length < 4) {
      return { success: false, error: 'Password must be at least 4 characters long.' };
    }

    const emailExists = users.some(u => u.email.toLowerCase() === cleanEmail);
    if (emailExists) {
      return { success: false, error: 'An account with this email address already exists.' };
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      password,
      role: role || 'user',
      designation: designation.trim() || (role === 'admin' ? 'AYUSH Garden Administrator' : 'Botanical Researcher'),
      institution: institution.trim() || 'Virtual Herbal Garden AYUSH Portal',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatarInitials: getInitials(cleanName)
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setCurrentUser(newUser);
    setIsAuthModalOpen(false);

    return { success: true, user: newUser };
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
  };

  // Open modal helper
  const openAuthModal = ({ tab = 'signin', role = 'user' } = {}) => {
    setAuthModalTab(tab);
    setAuthRoleTab(role);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const isAdmin = currentUser?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        isAuthModalOpen,
        authModalTab,
        authRoleTab,
        setAuthModalTab,
        setAuthRoleTab,
        openAuthModal,
        closeAuthModal,
        login,
        signup,
        logout,
        registeredUsers: users
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
