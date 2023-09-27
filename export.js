import * as fs from "fs";
import axios from "axios";
import config from "./config.json" assert { type: "json" };

function getHeaders() {
  const headers = {};
  if (config.sourceToken) {
    headers.Authorization = `Bearer ${config.sourceToken}`;
  }
  return headers;
}

async function exportMemos() {
  const res = await axios({
    method: "get",
    url: config.sourceUrl,
    headers: getHeaders(),
    params: {
      limit: 1000,
      offset: 0,
    },
  });
  fs.writeFileSync("memos.json", JSON.stringify(res.data, null, 2));
}

exportMemos();
