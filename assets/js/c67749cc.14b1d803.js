"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||l[u]||s;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"signed-url",title:"Signed URL service",sidebar_label:"Signed URL service",slug:"/signed-url-service"},c=void 0,p={unversionedId:"signed-url",id:"signed-url",title:"Signed URL service",description:"Introduction",source:"@site/docs/signed-url.md",sourceDirName:".",slug:"/signed-url-service",permalink:"/nestjs-s3/signed-url-service",editUrl:"https://github.com/LabO8/nestjs-s3/docs/signed-url.md",tags:[],version:"current",frontMatter:{id:"signed-url",title:"Signed URL service",sidebar_label:"Signed URL service",slug:"/signed-url-service"},sidebar:"docsSidebar",previous:{title:"Objects",permalink:"/nestjs-s3/objects-service"},next:{title:"Download helper",permalink:"/nestjs-s3/download helper"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Basic usage",id:"basic-usage",children:[{value:"PUT signed URL",id:"put-signed-url",children:[],level:3},{value:"GET signed url",id:"get-signed-url",children:[],level:3},{value:"DELETE pre-signed URL",id:"delete-pre-signed-url",children:[],level:3}],level:2}],l={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"We use Signed URL service, to generate all kinds of signed URLs, that we will need."),(0,s.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,s.kt)("p",null,"The pre-requisites to use this service are just to have the main module initialized in our app, so we have access to all the services it exports.\nLater when we need a service we can simply:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@nestjs/common';\nimport { SignedUrlService } from '@lab08/nestjs-s3';\n\n@Injectable()\nexport class MyService {\n  public constructor(private readonly signedUrlService: SignedUrlService) {}\n}\n")),(0,s.kt)("p",null,"then we can simply call start using the service freely."),(0,s.kt)("h3",{id:"put-signed-url"},"PUT signed URL"),(0,s.kt)("p",null,"To to get a signed URL you can call"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = this.signedUrlService.getPutSignedUrl('bucket', 'remote', expiresIn, options);\n")),(0,s.kt)("p",null,"it accepts the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type PutObjectOptions {\n     /**\n     * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned\n     *       ACL</a>.</p>\n     *          <p>This action is not supported by Amazon S3 on Outposts.</p>\n     */\n    ACL?: ObjectCannedACL | string;\n    /**\n     * <p> Can be used to specify caching behavior along the request/reply chain. For more\n     *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>\n     */\n    CacheControl?: string;\n    /**\n     * <p>Specifies presentational information for the object. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1</a>.</p>\n     */\n    ContentDisposition?: string;\n    /**\n     * <p>Specifies what content encodings have been applied to the object and thus what decoding\n     *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header\n     *          field. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11</a>.</p>\n     */\n    ContentEncoding?: string;\n    /**\n     * <p>The language the content is in.</p>\n     */\n    ContentLanguage?: string;\n    /**\n     * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be\n     *          determined automatically. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13</a>.</p>\n     */\n    ContentLength?: number;\n    /**\n     * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to\n     *          RFC 1864. This header can be used as a message integrity check to verify that the data is\n     *          the same data that was originally sent. Although it is optional, we recommend using the\n     *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST\n     *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST\n     *             Authentication</a>.</p>\n     */\n    ContentMD5?: string;\n    /**\n     * <p>A standard MIME type describing the format of the contents. For more information, see\n     *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17</a>.</p>\n     */\n    ContentType?: string;\n    /**\n     * <p>The date and time at which the object is no longer cacheable. For more information, see\n     *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21</a>.</p>\n     */\n    Expires?: Date;\n    /**\n     * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the\n     *       object.</p>\n     *          <p>This action is not supported by Amazon S3 on Outposts.</p>\n     */\n    GrantFullControl?: string;\n    /**\n     * <p>Allows grantee to read the object data and its\n     *       metadata.</p>\n     *          <p>This action is not supported by Amazon S3 on Outposts.</p>\n     */\n    GrantRead?: string;\n    /**\n     * <p>Allows grantee to read the object ACL.</p>\n     *          <p>This action is not supported by Amazon S3 on Outposts.</p>\n     */\n    GrantReadACP?: string;\n    /**\n     * <p>Allows grantee to write the ACL for the applicable\n     *       object.</p>\n     *          <p>This action is not supported by Amazon S3 on Outposts.</p>\n     */\n    GrantWriteACP?: string;\n    /**\n     * <p>A map of metadata to store with the object in S3.</p>\n     */\n    Metadata?: {\n        [key: string]: string;\n    };\n    /**\n     * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,\n     *          AES256, aws:kms).</p>\n     */\n    ServerSideEncryption?: ServerSideEncryption | string;\n    /**\n     * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The\n     *          STANDARD storage class provides high durability and high availability. Depending on\n     *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses\n     *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the\n     *          <i>Amazon S3 User Guide</i>.</p>\n     */\n    StorageClass?: StorageClass | string;\n    /**\n     * <p>If the bucket is configured as a website, redirects requests for this object to another\n     *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in\n     *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>\n     *\n     *          <p>In the following example, the request header sets the redirect to an object\n     *          (anotherPage.html) in the same bucket:</p>\n     *\n     *          <p>\n     *             <code>x-amz-website-redirect-location: /anotherPage.html</code>\n     *          </p>\n     *\n     *          <p>In the following example, the request header sets the object redirect to another\n     *          website:</p>\n     *\n     *          <p>\n     *             <code>x-amz-website-redirect-location: http://www.example.com/</code>\n     *          </p>\n     *\n     *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page\n     *             Redirects</a>. </p>\n     */\n    WebsiteRedirectLocation?: string;\n    /**\n     * <p>Specifies the algorithm to use when encrypting the object (for example,\n     *          AES256).</p>\n     */\n    SSECustomerAlgorithm?: string;\n    /**\n     * <p>Specifies the customer-provided encryption key for Amazon S3 to encrypt data. This\n     *          value is used to store the object and then it is discarded; Amazon S3 does not store the\n     *          encryption key. The key must be appropriate for use with the algorithm specified in the\n     *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>\n     */\n    SSECustomerKey?: string;\n    /**\n     * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses\n     *          this header for a message integrity check to ensure that the encryption key was transmitted\n     *          without error.</p>\n     */\n    SSECustomerKeyMD5?: string;\n    /**\n     * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of\n     *          <code>aws:kms</code>, this header specifies the ID of the Amazon Web Services Key Management Service\n     *          (Amazon Web Services KMS) symmetrical customer-managed key that was used for the\n     *          object. If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but do not\n     *          provide<code> x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the Amazon Web Services\n     *          managed key to protect the data. If the KMS key does not exist in the same account\n     *          issuing the command, you must use the full ARN and not just the ID.\n     *       </p>\n     */\n    SSEKMSKeyId?: string;\n    /**\n     * <p>Specifies the Amazon Web Services KMS Encryption Context for object encryption. The value of this\n     *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value\n     *          pairs.</p>\n     */\n    SSEKMSEncryptionContext?: string;\n    /**\n     * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>\n     *          <p>Specifying this header with a PUT action doesn\u2019t affect bucket-level settings for S3 Bucket Key.</p>\n     */\n    BucketKeyEnabled?: boolean;\n    /**\n     * <p>Confirms that the requester knows that it will be charged for the request. Bucket\n     *          owners need not specify this parameter in their requests. For information about downloading\n     *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in\n     *             Requestor Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>\n     */\n    RequestPayer?: RequestPayer | string;\n    /**\n     * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For\n     *          example, "Key1=Value1")</p>\n     */\n    Tagging?: string;\n    /**\n     * <p>The Object Lock mode that you want to apply to this object.</p>\n     */\n    ObjectLockMode?: ObjectLockMode | string;\n    /**\n     * <p>The date and time we want this object\'s Object Lock to expire. Must be formatted\n     *          as a timestamp parameter.</p>\n     */\n    ObjectLockRetainUntilDate?: Date;\n    /**\n     * <p>Specifies whether a legal hold will be applied to this object. For more information\n     *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object\n     *          Lock</a>.</p>\n     */\n    ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;\n    /**\n     * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>\n     */\n    ExpectedBucketOwner?: string;\n}\n')),(0,s.kt)("p",null,"which will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," wih the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export type PutSignedUrl = {\n  remote: string;\n  url: string;\n};\n")),(0,s.kt)("h3",{id:"get-signed-url"},"GET signed url"),(0,s.kt)("p",null,"In order to get a signed url you can call"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = this.signedUrlService.getSignedUrl('bucket', 'remote', expiresIn, options);\n")),(0,s.kt)("p",null,"which accepts the following options:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type GetObjectOptions {\n/**\n     * <p>Return the object only if its entity tag (ETag) is the same as the one specified,\n     *          otherwise return a 412 (precondition failed).</p>\n     */\n    IfMatch?: string;\n    /**\n     * <p>Return the object only if it has been modified since the specified time, otherwise\n     *          return a 304 (not modified).</p>\n     */\n    IfModifiedSince?: Date;\n    /**\n     * <p>Return the object only if its entity tag (ETag) is different from the one specified,\n     *          otherwise return a 304 (not modified).</p>\n     */\n    IfNoneMatch?: string;\n    /**\n     * <p>Return the object only if it has not been modified since the specified time, otherwise\n     *          return a 412 (precondition failed).</p>\n     */\n    IfUnmodifiedSince?: Date;\n    /**\n     * <p>Downloads the specified range bytes of an object. For more information about the HTTP\n     *          Range header, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>\n     *          <note>\n     *             <p>Amazon S3 doesn\'t support retrieving multiple ranges of data per <code>GET</code>\n     *             request.</p>\n     *          </note>\n     */\n    Range?: string;\n    /**\n     * <p>Sets the <code>Cache-Control</code> header of the response.</p>\n     */\n    ResponseCacheControl?: string;\n    /**\n     * <p>Sets the <code>Content-Disposition</code> header of the response</p>\n     */\n    ResponseContentDisposition?: string;\n    /**\n     * <p>Sets the <code>Content-Encoding</code> header of the response.</p>\n     */\n    ResponseContentEncoding?: string;\n    /**\n     * <p>Sets the <code>Content-Language</code> header of the response.</p>\n     */\n    ResponseContentLanguage?: string;\n    /**\n     * <p>Sets the <code>Content-Type</code> header of the response.</p>\n     */\n    ResponseContentType?: string;\n    /**\n     * <p>Sets the <code>Expires</code> header of the response.</p>\n     */\n    ResponseExpires?: Date;\n    /**\n     * <p>VersionId used to reference a specific version of the object.</p>\n     */\n    VersionId?: string;\n    /**\n     * <p>Specifies the algorithm to use when decrypting the object (for example,\n     *          AES256).</p>\n     */\n    SSECustomerAlgorithm?: string;\n    /**\n     * <p>Specifies the customer-provided encryption key for Amazon S3 to encrypt the data. This\n     *          value is used to decrypt the object when recovering it and must match the one used when\n     *          storing the data. The key must be appropriate for use with the algorithm specified in the\n     *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>\n     */\n    SSECustomerKey?: string;\n    /**\n     * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses\n     *          this header for message integrity check to ensure that the encryption key was transmitted\n     *          without error.</p>\n     */\n    SSECustomerKeyMD5?: string;\n    /**\n     * <p>Confirms that the requester knows they will be charged for the request. Bucket\n     *          owners need not specify this parameter in their requests. For information about downloading\n     *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in\n     *             Requestor Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>\n     */\n    RequestPayer?: RequestPayer | string;\n    /**\n     * <p>Part number of the object being read. This is a positive integer between 1 and 10,000.\n     *          Effectively performs a \'ranged\' GET request for the part specified. Useful for downloading\n     *          just a part of an object.</p>\n     */\n    PartNumber?: number;\n    /**\n     * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>\n     */\n    ExpectedBucketOwner?: string;\n}\n')),(0,s.kt)("p",null,"and returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," with a string containting the URL"),(0,s.kt)("h3",{id:"delete-pre-signed-url"},"DELETE pre-signed URL"),(0,s.kt)("p",null,"We can also create a delete presigned urls."),(0,s.kt)("p",null,"If we want to delete one object, we can:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = this.signedUrlService.getDeleteSignedUrl('bucket', 'remote', expiresIn, options);\n")),(0,s.kt)("p",null,"which takes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type DeleteObjectOptions {\n    /**\n     * <p>The concatenation of the authentication device\'s serial number, a space, and the value\n     *          that is displayed on your authentication device. Required to delete a versioned permanently\n     *          object if versioning is configured with MFA delete enabled.</p>\n     */\n    MFA?: string;\n    /**\n     * <p>VersionId used to reference a specific version of the object.</p>\n     */\n    VersionId?: string;\n    /**\n     * <p>Confirms that the requester knows that they will be charged for the request. Bucket\n     *          owners need not specify this parameter in their requests. For information about downloading\n     *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in\n     *             Requestor Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>\n     */\n    RequestPayer?: RequestPayer | string;\n    /**\n     * <p>Indicates whether S3 Object Lock should bypass Governance-mode restrictions to the process\n     *          this operation. To use this header, you must have the <code>s3:PutBucketPublicAccessBlock</code>\n     *          permission.</p>\n     */\n    BypassGovernanceRetention?: boolean;\n    /**\n     * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>\n     */\n    ExpectedBucketOwner?: string;\n}\n')),(0,s.kt)("p",null,"and returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," with the string containing the url."),(0,s.kt)("p",null,"Or delete multiple objects with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = this.signedUrlService.getDeleteObjectsSignedUrl('bucket', ['remote'], expiresIn, options);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type DeleteObjectsOptions = {\n  /**\n   * <p>The concatenation of the authentication device\'s serial number, a space, and the value\n   *          that is displayed on your authentication device. Required to delete a versioned permanently\n   *          object if versioning is configured with MFA delete enabled.</p>\n   */\n  MFA?: string;\n  /**\n   * <p>Confirms that the requester knows that they will be charged for the request. Bucket\n   *          owners need not specify this parameter in their requests. For information about downloading\n   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in\n   *             Requestor Pays Buckets</a> in the <i>Amazon S3 User Guide</i>.</p>\n   */\n  RequestPayer?: RequestPayer | string;\n  /**\n   * <p>Specifies whether you want to delete this object even if it has a Governance-type Object\n   *          Lock in place. To use this header, you must have the <code>s3:PutBucketPublicAccessBlock</code>\n   *          permission.</p>\n   */\n  BypassGovernanceRetention?: boolean;\n  /**\n   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>\n   */\n  ExpectedBucketOwner?: string;\n};\n')),(0,s.kt)("p",null,"which will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," with a string containing the url."))}h.isMDXComponent=!0}}]);