type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/docs/generate-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'bucket'
            },
            {
                name: 'password'
            },
            {
                name: 'username'
            },
            {
                name: 'test'
            },
            {
                name: 'save'
            },
            {
                name: 'expiresIn'
            },
        ]
    },
    '/api/docs/initiate-POST': {
        parameters: [
            {
                name: 'assets'
            },
        ]
    },
}