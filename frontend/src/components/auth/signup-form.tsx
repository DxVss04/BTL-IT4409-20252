import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router";

const signUpSchema = z.object({
  firstname: z.string().min(1, "Tên bắt buộc phải có"),
  lastname: z.string().min(1, "Họ bắt buộc phải có"),
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
  email: z.email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const { signUp } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const { firstname, lastname, username, email, password } = data;

    // gọi backend để signup
    await signUp(username, password, email, firstname, lastname);

    navigate("/signin");
  };

  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
<<<<<<< HEAD
      <Card className="overflow-hidden p-0 border-border">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            className="p-6 md:p-8"
=======
      <Card className="overflow-hidden border-border/80 bg-card/95 p-0 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <CardContent className="grid p-0 md:grid-cols-[0.95fr_1.05fr]">
          <form
            className="p-6 sm:p-8 md:p-10"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-6">
              {/* header - logo */}
<<<<<<< HEAD
              <div className="flex flex-col items-center text-center gap-2">
=======
              <div className="flex flex-col items-center gap-3 text-center">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                <a
                  href="/"
                  className="mx-auto block w-fit text-center"
                >
                  <img
<<<<<<< HEAD
                    src="/logo.svg"
                    alt="logo"
                  />
                </a>

                <h1 className="text-2xl font-bold">Tạo tài khoản Moji</h1>
                <p className="text-muted-foreground text-balance">
=======
                    src="/logo_web.png"
                    alt="logo"
                    className="h-12 w-auto"
                  />
                </a>

                <h1 className="text-2xl font-semibold tracking-tight text-foreground">Tạo tài khoản Ugmail</h1>
                <p className="text-balance text-sm leading-6 text-muted-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                  Chào mừng bạn! Hãy đăng ký để bắt đầu!
                </p>
              </div>

              {/* họ & tên */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label
                    htmlFor="lastname"
<<<<<<< HEAD
                    className="block text-sm"
=======
                    className="block text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                  >
                    Họ
                  </Label>
                  <Input
                    type="text"
                    id="lastname"
                    {...register("lastname")}
                  />

                  {errors.lastname && (
                    <p className="error-message">{errors.lastname.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="fistname"
<<<<<<< HEAD
                    className="block text-sm"
=======
                    className="block text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                  >
                    Tên
                  </Label>
                  <Input
                    type="text"
                    id="firstname"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <p className="error-message">{errors.firstname.message}</p>
                  )}
                </div>
              </div>

              {/* username */}
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="username"
<<<<<<< HEAD
                  className="block text-sm"
=======
                  className="block text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                >
                  Tên đăng nhập
                </Label>
                <Input
                  type="text"
                  id="username"
<<<<<<< HEAD
                  placeholder="moji"
=======
                  placeholder="Ugmail"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                  {...register("username")}
                />
                {errors.username && (
                  <p className="error-message">{errors.username.message}</p>
                )}
              </div>

              {/* email */}
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="email"
<<<<<<< HEAD
                  className="block text-sm"
=======
                  className="block text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="m@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              {/* password */}
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="password"
<<<<<<< HEAD
                  className="block text-sm"
=======
                  className="block text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                >
                  Mật khẩu
                </Label>
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </div>

              {/* nút đăng ký */}
              <Button
                type="submit"
<<<<<<< HEAD
                className="w-full"
=======
                className="h-11 w-full"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                disabled={isSubmitting}
              >
                Tạo tài khoản
              </Button>

<<<<<<< HEAD
              <div className="text-center text-sm">
                Đã có tài khoản?{" "}
                <a
                  href="/signin"
                  className="underline underline-offset-4"
=======
              <div className="text-center text-sm text-muted-foreground">
                Đã có tài khoản?{" "}
                <a
                  href="/signin"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </form>
<<<<<<< HEAD
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholderSignUp.png"
              alt="Image"
              className="absolute top-1/2 -translate-y-1/2 object-cover"
=======
          <div className="relative hidden overflow-hidden bg-gradient-accent md:block">
            <img
              src="/placeholderSignUp.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-contain p-10"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            />
          </div>
        </CardContent>
      </Card>
<<<<<<< HEAD
      <div className=" text-xs text-balance px-6 text-center *:[a]:hover:text-primary text-muted-foreground *:[a]:underline *:[a]:underline-offetset-4">
=======
      <div className="px-6 text-center text-xs text-balance text-muted-foreground *:[a]:font-medium *:[a]:text-primary *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary/80">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        Bằng cách tiếp tục, bạn đồng ý với <a href="#">Điều khoản dịch vụ</a> và{" "}
        <a href="#">Chính sách bảo mật</a> của chúng tôi.
      </div>
    </div>
  );
}
