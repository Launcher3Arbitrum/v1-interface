import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money, infos } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { createCampaign } = useStateContext();
    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkIfImage(form.image, async (exists) => {
            if (exists) {
                setIsLoading(true)
                await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
                setIsLoading(false);
                navigate('/');
            } else {
                alert('Provide valid image URL')
                setForm({ ...form, image: '' });
            }
        })
    }

    return (
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
            {isLoading && <Loader />}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">START MY FUNDRAISING CAMPAIGN 🚀</h1>
            </div>

            <div className="w-full flex justify-start items-center p-4 bg-[#1D6EF1] h-[120px] rounded-[10px]">
                <img src={infos} alt="infos" className="w-[40px] h-[40px] object-contain" />
                <h3 className="font-epilogue font-bold text-[15px] text-white ml-[15px]">To raise funds for your #web3 project with Launcher3, you only need to pay the gas fee. 🌱 (Arbitrum Network = a few cents)</h3>
            </div>


            <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Your Name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />
                    <FormField
                        labelName="Campaign Title *"
                        placeholder="Write a title"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}
                    />
                </div>

                <FormField
                    labelName="Description *"
                    placeholder="Explain your project & why fundraising is important for it."
                    isTextArea
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}
                />

                <div className="w-full flex justify-start items-center p-4 bg-[#1D6EF1] h-[120px] rounded-[10px]">
                    <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
                    <h4 className="font-epilogue font-bold text-[15px] text-white ml-[15px]">You will get 95% of the raised amount directly on your wallet. 💫</h4>
                </div>

                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Goal *"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={(e) => handleFormFieldChange('target', e)}
                    />
                    <FormField
                        labelName="End Date *"
                        placeholder="End Date"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e) => handleFormFieldChange('deadline', e)}
                    />
                </div>

                <FormField
                    labelName="Campaign image * (for exemple, you can host your pic on imgbb.com)"
                    placeholder="Place image URL of your campaign"
                    inputType="url"
                    value={form.image}
                    handleChange={(e) => handleFormFieldChange('image', e)}
                />

                <div className="flex justify-center items-center mt-[40px]">
                    <CustomButton
                        btnType="submit"
                        title="Submit new campaign"
                        styles="bg-[#1D6EF1]"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateCampaign