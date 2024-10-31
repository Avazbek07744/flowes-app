import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { getFormData } from "../lib/utils"
import { login } from "../request"

const Login = () => {
    const hendelSubmit = (e) => {
        e.preventDefault()
        const res = getFormData(e.target)
        login(res)
    }
    return (
        <div className="flex items-center justify-center h-full">
            <form onSubmit={hendelSubmit} className="flex flex-col gap-5 max-w-96 w-full">
                <div>
                    <Label htmlFor="username">Foydalanuvchining ismi</Label>
                    <Input name="username" id="username" type='text' placeholder="Ismingizni kiriting" />
                </div>
                <div>
                    <Label htmlFor="password">Foydalanuvchining maxfiy so'zi</Label>
                    <Input name="password" id="password" type='password' placeholder="maxfiy so'zni kiriting" />
                </div>
                <div>
                    <Button className="w-full" type="submit">Kirish</Button>
                </div>
            </form>
        </div>
    )
}

export default Login
