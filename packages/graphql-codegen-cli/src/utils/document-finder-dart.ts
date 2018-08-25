// import stripComments from './strip-comments';
import { parse } from 'graphql-codegen-core';

export const extractDocumentStringFromDartCodeFile = (fileContent: string): string | null => {
  try {
    const parsed = parse(fileContent);

    if (parsed) {
      return fileContent;
    }
  } catch (e) {
    let matches = fileContent.match(/gql\("""([\s\S\n\r.]*?)"""/gm);

    const result = (matches || [])
      .map(item =>
        item
          .replace(/\$\{.*?\}/g, '')
          .replace(/(gql\(""")/g, '')
          .replace(/"""/g, '')
      )
      .join();
    if (!result || result === '') {
      return null;
    } else {
      return result;
    }
  }
};
