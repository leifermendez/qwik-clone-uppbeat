/**
 * Simple Auth For Testing Only!!!
 */
import type { Cookie } from '@builder.io/qwik-city';

const MOCK_USER = {
  user:'Leifer Mendez',
  avatar:`https://avatars.githubusercontent.com/u/15802366?v=4`,
  email:'leifer@test.com'
}


export const isUserAuthenticated = async (cookie: Cookie) => {
  console.log(`🤐🤐 Cookie: `,cookie.get(AUTHTOKEN_NAME))
  const currentJwt =  cookie.get(AUTHTOKEN_NAME)
  if(currentJwt?.value === 'my-token-1'){
    return MOCK_USER
  }
  return null;
};

export const signIn = async (formData: FormData, cookie: Cookie): Promise<AuthResult> => {
  const email = formData.get('email');
  const password = formData.get('password');

  console.log(`⚡⚡: ${email}-${password}`)
  if (email == 'qwik' && password == 'dev') {
    // super secret username/password (Testing purposes only, DO NOT DO THIS!!)
    const tokenJWT = 'my-token-1'
    cookie.set(AUTHTOKEN_NAME, tokenJWT, {
      httpOnly: true,
      maxAge: [5, 'minutes'],
      path: '/',
    });
    return {
      status: 'signed-in',
    };
  }

  return {
    status: 'invalid',
  };
};

export const signUp = async (formData: FormData, cookie: Cookie): Promise<AuthResult> => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  console.log(name)

  if (email == 'qwik' && password == 'dev') {
    const tokenJWT = 'my-token-1'
    cookie.set(AUTHTOKEN_NAME, tokenJWT, {
      httpOnly: true,
      maxAge: [5, 'minutes'],
      path: '/',
    });
    return {
      status: 'signed-in',
    };
  }

  return {
    status: 'invalid',
  };
};

export const signOut = (cookie: Cookie) => {
  cookie.delete(AUTHTOKEN_NAME, { path: '/' });
  return {
    status: 'signed-out',
  };
};

export interface AuthResult {
  status: 'signed-in' | 'signed-out' | 'invalid';
}

const AUTHTOKEN_NAME = 'qwikcity-auth-token';