import React from 'react';
import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

export default function InputField({placeholder, value,label, ...props }) {
    return (
    <FormControl id={props.id} isRequired>
        <FormLabel fontSize="small" htmlFor={props.name}>
          {label.toUpperCase()}
        </FormLabel>
        <Input  placeholder={placeholder} size="lg" value={value} {...props}/>
    </FormControl>
    )
}
