import { get, del, put } from "../http";

const getFileTree = () => {
  const res = get("filetree");
  return res;
};

const getFile = async (id: number) => {
  const res = await get(`files/${id}`);
  return res;
};

const updateFile = async (id: string, payload: any) => {
  const res = await put(`files/${id}`, payload);
  return res;
};

const deleteFile = async (id: string) => {
  const res = await del(`files/${id}`);
  return res;
};

export { getFileTree, getFile, updateFile, deleteFile };
