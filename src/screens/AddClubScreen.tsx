import React, { useCallback } from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {FormTextInput} from '../components/FormTextInput';
import { FormProvider, useForm} from 'react-hook-form';
import {Club} from '../types';
import { useAppDispatch } from '../redux/hooks';
import { addClub } from '../redux/slices/clubsSlice';
import { useNavigation } from '../hooks/use-navigation';

export const AddClubScreen = () => {
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();
  const form = useForm<Club>({
    mode:'onChange',
  });
  const onSubmit = useCallback(()=>{
    dispatch(addClub(form.getValues()));
    goBack();
  },[dispatch, form, goBack]);

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <FormTextInput name="name" label="Name" required />
        <FormTextInput name="country" label="Country" required/>
        <FormTextInput name="logoUrl" label="Logo url" required/>
        <Button title="Add the club" disabled={!form.formState.isValid} onPress={form.handleSubmit(onSubmit)} />
      </FormProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingTop:32,
    paddingHorizontal:24,
    rowGap:24,
    backgroundColor:'white',
    flex:1,
  },
});
