/* tslint:disable */
/* eslint-disable */
/*
API Doc

Onedoc is an innovative API solution for developers, offering a simple and secure way to create and manage PDF documents using familiar technologies like React.

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DocumentGeneratePdfFromBucketRequest } from '../models';
// @ts-ignore
import { DocumentRenderingBucketRequest } from '../models';
// @ts-ignore
import { DocumentRenderingBucketRequestAssetsInner } from '../models';
// @ts-ignore
import { DocumentRenderingBucketResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DocumentApi - axios parameter creator
 * @export
 */
export const DocumentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This route is responsible for generating a PDF from a bucket.  It expects a JSON body with details of the bucket, user credentials, and PDF generation options.
         * @summary Generates a PDF from a specified bucket.
         * @param {DocumentGeneratePdfFromBucketRequest} documentGeneratePdfFromBucketRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePdfFromBucket: async (documentGeneratePdfFromBucketRequest: DocumentGeneratePdfFromBucketRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentGeneratePdfFromBucketRequest' is not null or undefined
            assertParamExists('generatePdfFromBucket', 'documentGeneratePdfFromBucketRequest', documentGeneratePdfFromBucketRequest)
            const localVarPath = `/api/docs/generate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKeyAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: documentGeneratePdfFromBucketRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/docs/generate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(documentGeneratePdfFromBucketRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint creates a bucket for the html and all specified assets. It returns signed urls to the buckets.
         * @summary Initiates a document\'s rendering
         * @param {DocumentRenderingBucketRequest} documentRenderingBucketRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderingBucket: async (documentRenderingBucketRequest: DocumentRenderingBucketRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'documentRenderingBucketRequest' is not null or undefined
            assertParamExists('renderingBucket', 'documentRenderingBucketRequest', documentRenderingBucketRequest)
            const localVarPath = `/api/docs/initiate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-api-key", keyParamName: "apiKeyAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: documentRenderingBucketRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/docs/initiate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(documentRenderingBucketRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DocumentApi - functional programming interface
 * @export
 */
export const DocumentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DocumentApiAxiosParamCreator(configuration)
    return {
        /**
         * This route is responsible for generating a PDF from a bucket.  It expects a JSON body with details of the bucket, user credentials, and PDF generation options.
         * @summary Generates a PDF from a specified bucket.
         * @param {DocumentApiGeneratePdfFromBucketRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generatePdfFromBucket(requestParameters: DocumentApiGeneratePdfFromBucketRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Uint8Array | File | buffer.File>> {
            const documentGeneratePdfFromBucketRequest: DocumentGeneratePdfFromBucketRequest = {
                title: requestParameters.title,
                bucket: requestParameters.bucket,
                password: requestParameters.password,
                username: requestParameters.username,
                test: requestParameters.test,
                save: requestParameters.save,
                expiresIn: requestParameters.expiresIn
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generatePdfFromBucket(documentGeneratePdfFromBucketRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint creates a bucket for the html and all specified assets. It returns signed urls to the buckets.
         * @summary Initiates a document\'s rendering
         * @param {DocumentApiRenderingBucketRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderingBucket(requestParameters: DocumentApiRenderingBucketRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DocumentRenderingBucketResponse>> {
            const documentRenderingBucketRequest: DocumentRenderingBucketRequest = {
                assets: requestParameters.assets
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.renderingBucket(documentRenderingBucketRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DocumentApi - factory interface
 * @export
 */
export const DocumentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DocumentApiFp(configuration)
    return {
        /**
         * This route is responsible for generating a PDF from a bucket.  It expects a JSON body with details of the bucket, user credentials, and PDF generation options.
         * @summary Generates a PDF from a specified bucket.
         * @param {DocumentApiGeneratePdfFromBucketRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePdfFromBucket(requestParameters: DocumentApiGeneratePdfFromBucketRequest, options?: AxiosRequestConfig): AxiosPromise<Uint8Array | File | buffer.File> {
            return localVarFp.generatePdfFromBucket(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint creates a bucket for the html and all specified assets. It returns signed urls to the buckets.
         * @summary Initiates a document\'s rendering
         * @param {DocumentApiRenderingBucketRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderingBucket(requestParameters: DocumentApiRenderingBucketRequest, options?: AxiosRequestConfig): AxiosPromise<DocumentRenderingBucketResponse> {
            return localVarFp.renderingBucket(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generatePdfFromBucket operation in DocumentApi.
 * @export
 * @interface DocumentApiGeneratePdfFromBucketRequest
 */
export type DocumentApiGeneratePdfFromBucketRequest = {
    
} & DocumentGeneratePdfFromBucketRequest

/**
 * Request parameters for renderingBucket operation in DocumentApi.
 * @export
 * @interface DocumentApiRenderingBucketRequest
 */
export type DocumentApiRenderingBucketRequest = {
    
} & DocumentRenderingBucketRequest

/**
 * DocumentApiGenerated - object-oriented interface
 * @export
 * @class DocumentApiGenerated
 * @extends {BaseAPI}
 */
export class DocumentApiGenerated extends BaseAPI {
    /**
     * This route is responsible for generating a PDF from a bucket.  It expects a JSON body with details of the bucket, user credentials, and PDF generation options.
     * @summary Generates a PDF from a specified bucket.
     * @param {DocumentApiGeneratePdfFromBucketRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public generatePdfFromBucket(requestParameters: DocumentApiGeneratePdfFromBucketRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).generatePdfFromBucket(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint creates a bucket for the html and all specified assets. It returns signed urls to the buckets.
     * @summary Initiates a document\'s rendering
     * @param {DocumentApiRenderingBucketRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentApiGenerated
     */
    public renderingBucket(requestParameters: DocumentApiRenderingBucketRequest, options?: AxiosRequestConfig) {
        return DocumentApiFp(this.configuration).renderingBucket(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
