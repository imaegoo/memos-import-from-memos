import axios from "axios";
import config from "./config.json" assert { type: "json" };
import memos from "./memos.json" assert { type: "json" };

function getHeaders() {
  const headers = {};
  if (config.targetToken) {
    headers.Authorization = `Bearer ${config.targetToken}`;
  }
  return headers;
}

async function importMemos() {
  for (const memo of memos) {
    const res = await axios({
      method: "post",
      url: config.targetUrl,
      headers: getHeaders(),
      data: {
        content: memo.content,
        createdTs: memo.createdTs,
        visibility: memo.visibility,
      },
    });
    console.log(res.data);
  }
}

importMemos();
