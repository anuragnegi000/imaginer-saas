import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm';

const AddTransformationType = ({params:{type}}:SearchParamProps) => {
  const transformation=transformationTypes[type];
  return (
    <>    
    <Header title={transformation.title}
     subtitle={transformation.subTitle}
     />
     <TransformationForm/>
    </>

  )
}

export default AddTransformationType  