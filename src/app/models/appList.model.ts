export interface AppList {
    feed: Feed;
}

export interface Feed {
    author: Author;
    entry: Entry[];
    updated: Icon;
    rights: Icon;
    title: Icon;
    icon: Icon;
    link: FeedLink[];
    id: Icon;
}

export interface Author {
    name: Icon;
    uri: Icon;
}

export interface Icon {
    label: string;
}

export interface Entry {
    "im:name": Icon;
    "im:image": IMImage[];
    summary: Icon;
    "im:price": IMPrice;
    "im:contentType": IMContentType;
    rights: Icon;
    title: Icon;
    link: EntryLink[];
    id: ID;
    "im:artist": IMArtist;
    category: Category;
    "im:releaseDate": IMReleaseDate;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    "im:id": string;
    term: string;
    scheme: string;
    label: string;
}

export interface ID {
    label: string;
    attributes: { [key: string]: string };
}

export interface IMArtist {
    label: string;
    attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
    href: string;
}

export interface IMContentType {
    attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
    term: Label;
    label: Label;
}

export enum Label {
    Application = "Application",
}

export interface IMImage {
    label: string;
    attributes: IMImageAttributes;
}

export interface IMImageAttributes {
    height: string;
}

export interface IMPrice {
    label: string;
    attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
    amount: string;
    currency: Currency;
}

export enum Currency {
    Usd = "USD",
}

export interface IMReleaseDate {
    label: string;
    attributes: Icon;
}

export interface EntryLink {
    attributes: PurpleAttributes;
    "im:duration"?: Icon;
}

export interface PurpleAttributes {
    rel: Rel;
    type: Type;
    href: string;
    title?: Title;
    "im:assetType"?: IMAssetType;
}

export enum IMAssetType {
    Preview = "preview",
}

export enum Rel {
    Alternate = "alternate",
    Enclosure = "enclosure",
}

export enum Title {
    Preview = "Preview",
}

export enum Type {
    ImageJPEG = "image/jpeg",
    TextHTML = "text/html",
}

export interface FeedLink {
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    rel: string;
    type?: Type;
    href: string;
}
