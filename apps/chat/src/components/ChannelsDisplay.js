import { ChannelItem } from 'amazon-chime-sdk-component-library-react';
import React, { useEffect, useState } from 'react'
import { listChannelMemberships } from '../api/ChimeAPI';

const ChannelsDisplay = ({channel,userId,userData,loadUserActions,userPermission,activeChannel,channelIdChangeHandler,unreadChannels}) => {
    const [otherPerson,setotherPerson] = useState([])
    console.log(JSON.parse(JSON.stringify(channel)));
    useEffect(()=>{
        const getMembershipData=async()=>{
            const res=await listChannelMemberships(channel.ChannelArn,userId);
            console.log(res);
            if(res[0].Member.Name==userData.username)
                 setotherPerson(res[1].Member.Name);
            else
                setotherPerson(res[0].Member.Name)
        }
        getMembershipData();
    })
    return (
        <ChannelItem
                  key={channel.ChannelArn}
                  name={otherPerson}  
                  actions={loadUserActions(userPermission.role, channel)}
                  isSelected={channel.ChannelArn === activeChannel.ChannelArn}
                  onClick={e => {
                    e.stopPropagation();
                    channelIdChangeHandler(channel.ChannelArn);
                    }}
                  unread={unreadChannels.includes(channel.ChannelArn)}
                  unreadBadgeLabel="New"
              >
              </ChannelItem>
    )
}

export default ChannelsDisplay
