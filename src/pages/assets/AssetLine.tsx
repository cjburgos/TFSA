
import React from 'react';
import "./assets.css"
import {useNavigate} from "react-router-dom";
import { View, Image, Text } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

interface AssetLineProps {
    token: {
        img: string,
        shortName: string
    },
    value: number
}

function AssetLine(props: AssetLineProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/conversion_rates", {state: {
                token: props.token,
                amountAvailable: props.value
            }});
    }
    return (
        <View className={"asset-line"} onClick={handleClick}>
            <Image className="logos" src={props.token?.img} alt={"Token"} />
            <Text >{props.token?.shortName}</Text>
            <Text >{props.value}</Text>
        </View>
    )
}


export {AssetLine}