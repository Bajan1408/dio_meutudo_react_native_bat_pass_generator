export default function generatePass() {
    let password: string = '';
    const characters: string = '#$@!.;as0def123gtybmt456okATG789FNVBS';
    const passwordLength: number = 8;

    for(let i = 0; i < passwordLength; i++) {
        while(password.length < 8) {
            password += characters[Math.floor(Math.random() * (characters.length - 1) + 1)];
        }
    }

    return password;
}