import { thunder } from "./axios";
import { Message } from "@arco-design/web-react";

export async function updateEntry(entry) {
  const newStatus = entry.status === "read" ? "unread" : "read";
  try {
    const response = await thunder.request({
      method: "put",
      url: `/v1/entries`,
      data: { entry_ids: [entry.id], status: newStatus },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function getCurrentUser() {
  try {
    const response = await thunder.request({
      method: "get",
      url: `/v1/me`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function clickEntryList(entry) {
  try {
    const response = await thunder.request({
      method: "put",
      url: `/v1/entries`,
      data: { entry_ids: [entry.id], status: "read" },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function getUnreadInfo() {
  try {
    const response = await thunder.request({
      method: "get",
      url: `/v1/feeds/counters`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function getFeeds() {
  try {
    const response = await thunder.request({
      method: "get",
      url: `/v1/feeds`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function getGroups() {
  try {
    const response = await thunder.request({
      method: "get",
      url: `/v1/categories`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
  }
}

export async function delGroup(id) {
  try {
    const response = await thunder.request({
      method: "delete",
      url: `/v1/categories/${id}`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.message);
    throw error;
  }
}

export async function addGroup(title) {
  try {
    const response = await thunder.request({
      method: "post",
      url: `/v1/categories`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { title: title },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.response.data.error_message || error.message);
  }
}

export async function editGroup(id, newTitle) {
  try {
    const response = await thunder.request({
      method: "put",
      url: `/v1/categories/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { title: newTitle },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.response.data.error_message || error.message);
  }
}

export async function editFeed(feed_id, newTitle, group_id) {
  try {
    const response = await thunder.request({
      method: "put",
      url: `/v1/feeds/${feed_id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { title: newTitle, category_id: group_id },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.response.data.error_message || error.message);
  }
}

export async function deleteFeed(feed_id) {
  try {
    const response = await thunder.request({
      method: "delete",
      url: `/v1/feeds/${feed_id}`,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.response.data.error_message || error.message);
  }
}

export async function addFeed(feed_url, group_id) {
  try {
    const response = await thunder.request({
      method: "post",
      url: `/v1/feeds`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { feed_url: feed_url, category_id: group_id },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Message.error(error.response.data.error_message || error.message);
  }
}
