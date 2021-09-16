import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, choosePrice, chooseModel, chooseTrim, chooseOptions, chooseDimensions, chooseWeight } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
    model: string;
    price: string;
    trim: string;
    added_options: string;
    dimensions: string;
    weight: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const make = useSelector<CarState>(state => state.make)
    const model = useSelector<CarState>(state => state.model)
    const price = useSelector<CarState>(state => state.price)
    const trim = useSelector<CarState>(state => state.trim)
    const added_options = useSelector<CarState>(state => state.added_options)
    const dimensions = useSelector<CarState>(state => state.dimensions)
    const weight = useSelector<CarState>(state => state.weight)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id!, data)
            window.location.reload()
            console.log(`Updated:${data} ${props.id}`)
            event.target.reset();
        } else {
            dispatch(chooseName(data.make))
            dispatch(chooseModel(data.model))
            dispatch(choosePrice(data.price))
            dispatch(chooseTrim(data.trim))
            dispatch(chooseOptions(data.added_options))
            dispatch(chooseDimensions(data.dimensions))
            dispatch(chooseWeight(data.weight))
            
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="price">MSRP Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="trim">Trim</label>
                    <Input {...register('trim')} name="trim" placeholder="Trim"/>
                </div>
                <div>
                    <label htmlFor="added_options">Options</label>
                    <Input {...register('added_options')} name="added_options" placeholder="Added Options"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <Button type='submit' color='primary' variant='contained'>Submit</Button>
            </form>
        </div>
    )
}