import React, {Component} from 'react';
import {FacebookProvider, Feed} from 'react-facebook';

export default class Story extends Component{
    render() {
        return (
            <FacebookProvider appIDd="123456789">
                <Feed link="https://www.facebook.com">
                    {({handleClick}) => (
                        <button type="button" onClick={handleCLick}>Share on Feed</button>
                    )}
                </Feed>
            </FacebookProvider>
        );
    }
}