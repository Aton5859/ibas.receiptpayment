/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
namespace receiptpayment {
    export namespace bo {

        /** 业务仓库 */
        export interface IBORepositoryReceiptPayment extends ibas.IBORepositoryApplication {

            /**
             * 上传文件
             * @param caller 调用者
             */
            upload(caller: ibas.IUploadFileCaller<ibas.FileData>): void;
            /**
             * 下载文件
             * @param caller 调用者
             */
            download(caller: ibas.IDownloadFileCaller<Blob>): void;
            /**
             * 查询 付款
             * @param fetcher 查询者
             */
            fetchPayment(fetcher: ibas.IFetchCaller<bo.IPayment>): void;
            /**
             * 保存 付款
             * @param saver 保存者
             */
            savePayment(saver: ibas.ISaveCaller<bo.IPayment>): void;

            /**
             * 查询 收款
             * @param fetcher 查询者
             */
            fetchReceipt(fetcher: ibas.IFetchCaller<bo.IReceipt>): void;
            /**
             * 保存 收款
             * @param saver 保存者
             */
            saveReceipt(saver: ibas.ISaveCaller<bo.IReceipt>): void;
        }
    }

}
