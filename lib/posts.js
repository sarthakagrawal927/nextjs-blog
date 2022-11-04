import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

const getAllFiles = function(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

export function getSortedPostsData() {
  const allFilesPaths = getAllFiles(postsDirectory);
  const allPostsData = allFilesPaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: filePath,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id: filePath,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getAllCategories() {
  const fileNames = getAllFiles(postsDirectory);

  const postIDs = fileNames.map((fileName) => {
    return {
      id: fileName,
    };
  });

  const categoriesSet = new Set();

  for (let i = 0; i < postIDs.length; i++) {
    const postData = await getPostData(postIDs[i].id);
    categoriesSet.add(postData.category);
  }
  const categories = [...categoriesSet];
  return categories;
}
