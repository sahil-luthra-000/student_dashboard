import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginApi } from "../../network/api";

const initialState = {
  loading: false,
  student: null,
  token: null,
  error: null,
  success: false,
};

export const loginStudent = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      let response = await loginApi({ email: email, password: password });
      if (response.status == 200) {
        return response.data;
      } else {
        return thunkApi.rejectWithValue(
          response.data.message ?? response.statusText
        );
      }
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue(e.response?.data?.message ?? e.message);
    }
  }
);

// export const googleLogin = createAsyncThunk('auth/google-login', async (credToken, thunkApi) => {
//   try {
//     let response = await googleLoginApi(credToken);
//     if(response.status == 200 && response.data.status == 200){
//       return response.data
//     }else{
//       return thunkApi.rejectWithValue(response.data.message ?? response.statusText);
//     }
//   } catch (e) {
//     console.log(e);
//     return thunkApi.rejectWithValue(e.response?.data?.message ?? e.message);
//   }
// })

// export const registerStudent = createAsyncThunk('auth/register', async ({name,email,password,contact,DOB}, thunkApi) => {
//   try {
//     let response = await registerApi({ name:name,email:email,password:password, contact:contact, DOB:DOB,});
//     if(response.status == 200 && response.data.status == 200){
//       return response.data
//     }else{
//       return thunkApi.rejectWithValue(response.data.message ?? response.statusText);
//     }
//   } catch (e) {
//     console.log(e);
//     return thunkApi.rejectWithValue(e.response?.data?.message ?? e.message);
//   }
// })

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.loading = false;
      state.profile = null;
      state.student = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.student = action.payload.payload;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
        toast.success(action.payload.message);
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        toast.error(action.payload);
      });

    //   .addCase(registerStudent.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(registerStudent.fulfilled, (state, action) => {
    //     state.student = action.payload.user;
    //     state.token = action.payload.token;
    //     state.loading = false;
    //     toast.success(action.payload.message);
    //   })
    //   .addCase(registerStudent.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.loading = false;
    //     toast.error(action.payload);
    //   })

    //   .addCase(googleLogin.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(googleLogin.fulfilled, (state, action) => {
    //     state.student = action.payload.data;
    //     state.token = action.payload.token;
    //     state.loading = false;
    //     toast.success(action.payload.message);
    //     state.profile = action.payload.profile;
    //   })
    //   .addCase(googleLogin.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.loading = false;
    //     toast.error(action.payload);
    //   });
  },
});

const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
export default authReducer;
