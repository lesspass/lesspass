import { PasswordProfile } from "lesspass";
import { api } from "../api";
import { PasswordProfileFromApi } from "../types";

type ListResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export const passwordProfilesApi = api
  .enhanceEndpoints({ addTagTypes: ["PasswordProfile"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getPasswordProfiles: builder.query<PasswordProfileFromApi[], void>({
        query: () => "passwords",
        transformResponse: (response: ListResponse<PasswordProfileFromApi>) =>
          response.results,
        providesTags: (result) =>
          result
            ? [
                ...result.map(
                  ({ id }) => ({ type: "PasswordProfile", id }) as const,
                ),
                { type: "PasswordProfile", id: "LIST" },
              ]
            : [{ type: "PasswordProfile", id: "LIST" }],
      }),
      createPasswordProfile: builder.mutation<
        PasswordProfileFromApi,
        PasswordProfile
      >({
        query: (body) => ({
          url: "/passwords/",
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: "PasswordProfile", id: "LIST" }],
      }),
      searchPasswordProfile: builder.query<
        PasswordProfileFromApi | undefined,
        string
      >({
        query: (site) => `/passwords/?search=${site}`,
        transformResponse: (response: ListResponse<PasswordProfileFromApi>) =>
          response.results.length > 0 ? response.results[0] : undefined,
        providesTags: (_result, _error, id) => [
          { type: "PasswordProfile", id },
        ],
      }),
      getPasswordProfile: builder.query<PasswordProfileFromApi, string>({
        query: (id) => `/passwords/${id}/`,
        providesTags: (_result, _error, id) => [
          { type: "PasswordProfile", id },
        ],
      }),
      updatePasswordProfile: builder.mutation<
        PasswordProfile,
        Partial<PasswordProfileFromApi> & Pick<PasswordProfileFromApi, "id">
      >({
        query: (body) => ({
          url: `/passwords/${body.id}/`,
          method: "PUT",
          body,
        }),
        invalidatesTags: (_result, _error, arg) => [
          { type: "PasswordProfile", id: arg.id },
        ],
      }),
      deletePasswordProfile: builder.mutation<
        { success: boolean; id: string },
        PasswordProfileFromApi
      >({
        query: ({ id }) => ({
          url: `/passwords/${id}/`,
          method: "DELETE",
        }),
        invalidatesTags: [{ type: "PasswordProfile", id: "LIST" }],
      }),
    }),
  });

export const {
  useSearchPasswordProfileQuery,
  useGetPasswordProfileQuery,
  useGetPasswordProfilesQuery,
  useCreatePasswordProfileMutation,
  useUpdatePasswordProfileMutation,
  useDeletePasswordProfileMutation,
} = passwordProfilesApi;
