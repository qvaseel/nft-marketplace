'use client'
import "./CreateAccount.css"
import Image from "next/image";
import img from "../../img/CreateAccountPic.png"
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
    example: string
    exampleRequired: string
  }

const CreateAccount = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	}
    return (
        <div className="accSection">
            <Image src={img} alt=""/>
            <div style={{width: '610px', paddingTop: '100px'}}>
                <TextH1 style={{fontWeight:'600', fontSize: '51px', marginBottom: '10px'}}>Create account</TextH1>
                <TextP style={{fontSize: '22px', marginBottom: '40px', width: '460px'}}>Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</TextP>
                <form action="#" onSubmit={handleSubmit(onSubmit)} style={{display:'flex',flexDirection:'column', width: '330px'}}>
                  <input type="text" className={errors.name ? "error" : "input"} {...register("name", { required: true})} placeholder="Username" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                      className={errors.email ? "error" : "input"}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className={errors.password ? "error" : "input"}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("replayPassword", {
                          required: true,
                          validate: (values) => {
                            const { password } = getValues();
                            return password === values;
                          },
                        })}
                        className={errors.replayPassword ? "error" : "input"}
                      />
                    <input className="submit" type="submit" value="Create account"/>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;