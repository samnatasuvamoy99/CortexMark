

import { Button } from "../components/Button";
import { ShareIcon } from "../icons/Shareicon";
import { PlusIcon } from '../icons/PlusIcon';
import { Card } from "../components/Card"
import { CreateContent } from "./CreateContent"
import { useEffect, useState } from "react";
import { Siderbar } from "../components/Siderbar";
import { useContent } from "../hooks/useContents";
import { BACKEND_URL } from "../Config"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export function Dashboard() {
    const [modelOpen, SetmodelOpen] = useState(false);
    const { contents, refresh } = useContent() ?? [];


    {/* if model is closes refresh the contents*/ }

    useEffect(() => {
        refresh();

    }, [modelOpen])

     const navigate = useNavigate();

    return (
        <div className="flex">
           

            <div className=" w-screen min-h-screen bg-gray-100 border-1">

                <CreateContent open={modelOpen} onClose={() => {
                    SetmodelOpen(false)
                }} />

                <div className="flex justify-end gap-3 mt-3" >
                    <div>
                        <Button variant="primary" styleType="primarystyle" text="Add Content" startIcon={<PlusIcon />} onClick={SetmodelOpen} />
                    </div>
                    <div className="mr-3">

                        <Button onClick={ async () => {

                            const responce = await axios.post(`${BACKEND_URL}/api/v1/links/brain/share`, {
                                share: true
                            }, {
                                headers: {
                                    "Authorization": localStorage.getItem("token")
                                }
                            })

                            const shareurl = `http://localhost:5173/share/${responce.data.hash}`

                            

                            navigate("/sharelink1", { state: { shareurl } });

                        }} variant="secondary" styleType="secondarystyle" text="Share Brain" startIcon={<ShareIcon />} />

                    </div>
                </div>

                <div className="flex mt-2 gap-4 flex-row p-4 flex-wrap">


                    {contents.map(({ type, link, title, _id }, index) => (
                        <div className="border-gray-400" key={_id ?? index}>
                            <Card type={type} link={link} title={title} />
                        </div>
                    ))}

                </div>
            </div>

        </div>


    )
}