import axios from "axios"

export const getGadgets = async () => {
  try {
    const response = await api.get("/gadgets/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGadget = async (id) => {
  try {
    const response = await api.get(`/gadgets/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createGadget = async (gadgetData) => {
  try {
    const response = await api.post("/gadgets/", gadgetData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateGadget = async (id, gadgetData) => {
  try {
    const response = await api.put(`/gadgets/${id}/`, gadgetData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteGadget = async (id) => {
  try {
    const response = await api.delete(`/gadgets/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
