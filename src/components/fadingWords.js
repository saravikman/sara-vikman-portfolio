import * as React from "react"
import { useEffect, useState } from 'react'
import { motion, useTime, useTransform } from "framer-motion"

export const FadingWords = () => {
    const time = useTime();
    const translateY = useTransform(time, [0, 500], [0, -100], { clamp: true });

    return (
        <div className="h-[120px]">
            <h1 className="">Hello!</h1>
        </div>
    )
}