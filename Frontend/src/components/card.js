import {view,Text , StyleShett}from 'react-native';
export default function card ({title, children}){
    return(
        <view Style = {StyleShett.card}>
            <Text style = {StyleShett.title}>{title} </Text>
            {children}
        </view>
    );
}
const styles = styles