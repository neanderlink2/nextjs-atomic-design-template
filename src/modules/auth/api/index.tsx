export const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        email,
        password,
        name: email.split('@')
    };
}