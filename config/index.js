const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? process.env.NEXT_PUBLIC_API_SERVER || 'http://localhost:3000/api/articles'|| 'https://jsonplaceholder.typicode.com/posts'  : 'https://yout website'