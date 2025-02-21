import { PasswordProfile } from "lesspass";
import { api } from "../api";

export interface APIPasswordProfile extends PasswordProfile {
  id: string;
  created: string;
  modified: string;
}

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
      getPasswordProfiles: builder.query<APIPasswordProfile[], void>({
        query: () => "passwords",
        transformResponse: (response: ListResponse<APIPasswordProfile>) =>
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
        APIPasswordProfile,
        PasswordProfile
      >({
        query: (body) => ({
          url: "/passwords/",
          method: "POST",
          body,
        }),
        invalidatesTags: [{ type: "PasswordProfile", id: "LIST" }],
      }),
      getPasswordProfile: builder.query<APIPasswordProfile, string>({
        query: (id) => `/passwords/${id}/`,
        providesTags: (_result, _error, id) => [
          { type: "PasswordProfile", id },
        ],
      }),
      editPasswordProfile: builder.mutation<
        PasswordProfile,
        Partial<APIPasswordProfile> & Pick<APIPasswordProfile, "id">
      >({
        query: (body) => ({
          url: `/passwords/${body.id}/`,
          method: "PUT",
          body,
        }),
        invalidatesTags: [{ type: "PasswordProfile", id: "LIST" }],
      }),
      deletePasswordProfile: builder.mutation<
        { success: boolean; id: string },
        APIPasswordProfile
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
  useGetPasswordProfileQuery,
  useGetPasswordProfilesQuery,
  useCreatePasswordProfileMutation,
  useDeletePasswordProfileMutation,
} = passwordProfilesApi;
