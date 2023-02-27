import { IViewSnapshot, OpBuilder, ViewCore } from '@teable-group/core';
import { Doc } from 'sharedb/lib/client';
import { IViewInstance } from './factory';

export class ViewExtended {
  static updateName(doc: Doc<IViewSnapshot>, name: string, oldName: string) {
    const viewOperation = OpBuilder.editor.setViewName.build({
      newName: name,
      oldName: oldName,
    });

    return new Promise<void>((resolve, reject) => {
      doc.submitOp([viewOperation], undefined, (error) => {
        error ? reject(error) : resolve(undefined);
      });
    });
  }
}

export abstract class View extends ViewCore {
  async updateName(name: string) {}
}
