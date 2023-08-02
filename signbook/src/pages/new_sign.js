import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import ADD_SIGN from '../lib/apollo/queries/addSign'


function NewSign() {
    const router = useRouter();

    const [formState, setFormState] = useState({})


    const [addSign] = useMutation(ADD_SIGN, {
        onCompleted() { // Once the sign has been created correctly, It will run onCompleted() callback
            router.push("/")
        }
    })


    const handleInput = ({ e, name }) => { // dynamically set the form state as soon as the user types something in form input
        setFormState({
            ...formState,
            [name]: e.target.value
        })
    }

    return (
        <div>
          <h1>Sign the Real-World Next.js signbook!</h1>
          
          <div>
            <div>
              <label htmlFor="nickname" >
                Nickname
              </label>

              <input
                id="nickname"
                type="text"
                onChange={(e) => handleInput({ e, name: 'nickname' })}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="content">
                Leave a message!
              </label>

              <textarea
                id="content"
                placeholder="Leave a message here!"
                onChange={(e) => handleInput({ e, name: 'content' })}
              />
            </div>


            <div>
              <label htmlFor="country" >
                If you want, write your country name and its emoji flag
              </label>

              <input
                id="country"
                type="text"
                onChange={(e) => handleInput({ e, name: 'country' })}
                placeholder="Country"
              />

              <button onClick={() => addSign({ variables: formState })}>
                Submit
              </button>
            </div>    
          </div>

          <Link href="/" passHref>
            <a> Back to the homepage</a>
          </Link>
        </div>
      );
    }

export default NewSign;